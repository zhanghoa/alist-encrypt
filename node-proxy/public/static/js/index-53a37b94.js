import{d as p,V as v,e as x,h as C,i as b,j as k,l as s,t as f,m as u,c as n,k as l,b as d,ac as m}from"./index-de02492d.js";const B={class:"mt-10px"},V=s("div",{class:"mb-20px text-20px font-bold"},"notice: setting the permissionMode of settings file before you test",-1),$=s("div",{class:"mb-20px"},"roles 页面权限控制",-1),g=s("div",{class:"mb-10px"},"codes 页面权限控制",-1),h=p({}),y=p({...h,__name:"index",setup(N){let{codes:a,roles:r}=v(x());const _=t=>{r=t,m({roles:t})},c=t=>{a=t,m({codes:t})};return(t,e)=>{const o=C("el-button");return b(),k("div",B,[V,$,s("div",null,f(u(r)),1),n(o,{onClick:e[0]||(e[0]=i=>_(["editor"]))},{default:l(()=>[d("roles切换为editor")]),_:1}),n(o,{onClick:e[1]||(e[1]=i=>_(["admin"]))},{default:l(()=>[d("roles切换为admin")]),_:1}),g,s("div",null,f(u(a)),1),n(o,{onClick:e[2]||(e[2]=i=>c([1]))},{default:l(()=>[d("Codes切换为[1]")]),_:1}),n(o,{onClick:e[3]||(e[3]=i=>c([16,9,10,11,12,13,15]))},{default:l(()=>[d("C odes切换为[16]")]),_:1})])}}});export{y as default};
