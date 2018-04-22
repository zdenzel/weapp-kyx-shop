import wepy from 'wepy'

export default class inputMixin extends wepy.mixin {
    methods = {
        input(e){
            const { store, trim } = e.currentTarget.dataset;
            //取得输入的值
            let value = e.detail.value || '';
            //去除前后空格
            value = value.replace(/(^\s*)|(\s*$)/g, '');
            //去除所有换行符
            if(trim && trim.indexOf('line') > -1){
                value = value.replace(/<\/?.+?>/g, '');
                value = value.replace(/[\r\n]+/g, '');
            }
            //去除所有空格与换行符
            if(trim && trim.indexOf('all') > -1){
                value = value.replace(/[\s\r\n]+/g, '');
            }
            //将值填入指定存储器中 {{store}}
            try{
                let arr = store.split('.');
                switch(arr.length){
                    case 1 : this[arr[0]] = value; break;
                    case 2 : this[arr[0]][arr[1]] = value; break;
                    case 3 : this[arr[0]][arr[1]][arr[2]] = value; break;
                    case 4 : this[arr[0]][arr[1]][arr[2]][arr[3]] = value; break;
                    case 5 : this[arr[0]][arr[1]][arr[2]][arr[3]][arr[4]] = value; break;
                }
            }catch(e){}
        }
    }
}
