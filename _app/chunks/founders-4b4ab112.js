const a=[{identifier:"sebastien",name:{first:"Sébastien",last:"Ohleyer"},social:{linkedIn:"sebastien-ohleyer"},title:"CEO",image:{src:"/img/sebastien.jpg"}},{identifier:"alexandre",name:{first:"Alexandre",last:"Jouandin"},social:{linkedIn:"alexandrejouandin",github:"Allezxandre",gitlab:"Allezxandre",keybase:"allezxandre",iMessage:{username:"first.last"}},title:"CTO",image:{gravatarHash:"daf8a0f2457da63e3c2e15cc2e4319e3"}},{identifier:"tristan",name:{first:"Tristan",last:"Stérin"},social:{linkedIn:"tristan-stérin-4b37b9107",github:"tcosmo"},title:"COO",image:{src:"/img/tristan-512.jpg"}}],e=new Map(a.map((a=>[a.identifier,a])));function i(a,e=1024,i=!1){return"src"in a.image?i?`https://prgm.dev${a.image.src}`:a.image.src:`https://www.gravatar.com/avatar/${a.image.gravatarHash}?size=${e}`}export{e as a,a as f,i};