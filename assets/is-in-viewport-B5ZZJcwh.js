function o(i,e=window,n=document.documentElement){const t=i.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(e.innerHeight||n.clientHeight)&&t.right<=(e.innerWidth||n.clientWidth)}var r=o;export{r as i};