import wepy from 'wepy'

const __TOAST_OPTION__ = {
    show: false,
    text: '提示信息',
    icon: 'warning',
    color: '#fff',
    image: null,
    duration: 1500,
    callback: null
}

export default class MinuiMixin extends wepy.mixin {

    data = {
        $toast: __TOAST_OPTION__
    }


    $showToast(option) {
        const {
            text,
            icon,
            color,
            image,
            duration,
            callback
        } = Object.assign({}, __TOAST_OPTION__, option);

        this.$toast.text = text;
        this.$toast.icon = icon;
        this.$toast.color = color;
        this.$toast.image = image;
        this.$toast.duration = duration;
        this.$toast.show = true;
        setTimeout(() => {
            this.$hideToast();
        }, duration);
    }

    $hideToast(callback) {
        this.$toast.show = false;
        callback && callback();
        this.$apply();
    }
}
