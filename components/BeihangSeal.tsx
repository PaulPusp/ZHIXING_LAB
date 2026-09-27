import {assetPath} from './assetPath';

export default function BeihangSeal({size=86}:{size?:number}){
  return <span className="buaa-seal" style={{'--seal-size':`${size}px`} as React.CSSProperties} role="img" aria-label="Beihang University seal">
    <img src={assetPath('beihang-official.jpg')} alt="" aria-hidden="true"/>
  </span>;
}
