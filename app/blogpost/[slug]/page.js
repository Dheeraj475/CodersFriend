import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { unified } from 'unified'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import OnThisPage from "@/components/onthispage"  // Import your OnThisPage component

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('content'))

  return files.map((filename) => ({
    slug: filename.replace('.md', ''),
  }))
}

async function getBlogData(slug) {
  const filepath = path.join('content', `${slug}.md`)
  const fileContent = fs.readFileSync(filepath, "utf-8")
  const { content, data } = matter(fileContent)

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: '👋🌍' })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)  // Slugifies headings so they have IDs
    .use(rehypeAutolinkHeadings)  // Adds anchor links to headings
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000
        }),
      ],
    })
    

  const htmlContent = (await processor.process(content)).toString()

  return { htmlContent, data }
}

export default async function Page({ params }) {
  const { slug } = params
  const { htmlContent, data } = await getBlogData(slug)

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">&quot;{data.description}&quot;</p>
      <div className="flex gap-2">
        <p className="text-sm text-gray-500 mb-4 italic">By {data.author}</p>
        <p className="text-sm text-gray-500 mb-4">{data.date}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="prose dark:prose-invert"></div>

      {/* Add the "On This Page" component with the parsed HTML content */}
      <OnThisPage htmlContent={htmlContent} />
    </div>
  )
}
