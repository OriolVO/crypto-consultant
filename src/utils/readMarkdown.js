import { readFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export async function readMarkdown (name) {
  const fullPath = join(__dirname, '..', 'templates', name)

  console.log('Reading template from:', fullPath)
  return readFile(fullPath, 'utf8')
}
