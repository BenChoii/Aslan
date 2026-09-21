import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { render } from '../.ssr/entry-server.js'
import { getMetadata } from '../src/data/metadata.js'
import { cities } from '../src/data/cities.js'
import { services } from '../src/data/services.js'
import { industries } from '../src/data/industries.js'
const paths=['/','/about','/contact','/contractor-referrals','/gallery','/industries',...industries.map(i=>'/industries/'+i.slug),...cities.flatMap(c=>['/'+c.slug,...services.map(s=>'/'+c.slug+'/'+s.slug)])]
const template=readFileSync('dist/index.html','utf8')
const escape=s=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
for(const path of paths){
  const {title,description,canonical}=getMetadata(path)
  const html=template.replace(/<title>.*?<\/title>/,`<title>${escape(title)}</title>`).replace(/<meta name="description" content="[^"]*"\s*\/>/,`<meta name="description" content="${escape(description)}" />`).replace('</head>',`<link rel="canonical" href="${canonical}" /></head>`).replace('<div id="root"></div>',`<div id="root">${render(path)}</div>`)
  const folder=join('dist',path);mkdirSync(folder,{recursive:true});writeFileSync(join(folder,'index.html'),html)
}
const sitemap='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+paths.map(p=>`<url><loc>https://aslanserviceslimited.ca${p}</loc></url>`).join('\n')+'\n</urlset>\n'
writeFileSync('dist/sitemap.xml',sitemap)
writeFileSync('public/sitemap.xml',sitemap)
console.log(`Pre-rendered ${paths.length} pages with content, metadata and canonical URLs.`)
