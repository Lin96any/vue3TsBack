
//rem屏幕适配
export  const Rem = (viewSize = 1920)=> {
    const changeRem = () => {
        const dpr:number = window.devicePixelRatio;
        let width = document.documentElement.clientWidth;
        if(width>1920){
            width = 1920 * dpr
        }else if(width<1300&&width>750){
            width = 1300 * dpr
        }else if(width<=750){
            viewSize = 750;
        }
        const remSize:number = Math.floor((width/viewSize)*100);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const html:HTMLElement = document.querySelector('html');
        html.style.fontSize = remSize + 'px';
    }
    changeRem();
    window.onresize  = changeRem
}