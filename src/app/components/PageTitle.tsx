import { useEffect } from 'react';
export default function PageTitle({title}:{title:string}){useEffect(()=>{document.title=`ShreeAura | ${title}`},[title]);return null;}
