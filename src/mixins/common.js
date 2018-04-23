import wepy from 'wepy'
//是否为生产模式
const isProdMode = true;
const staticUrl = isProdMode ? 'https://api.keyixing.com/applet' : 'https://keyixingapi.local.co.bendan.name/applet';
export default class common extends wepy.mixin {
    data = {
        staticUrl,
        colors: {
            backcolor: '#ddd4c1',
            forecolor: '#f6f1dd',
            maincolor: '#e9e0cc',
            border: '#b9ae8b',
            base: '#452713',
            primary: '#a91e11',
            success: '#e75607',
            warn: '#6b5021',
            invert: '#d6c5ac',
            gray: '#8c8174'
        }
    }
}
