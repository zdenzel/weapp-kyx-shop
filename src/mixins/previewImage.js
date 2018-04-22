import wepy from 'wepy'

export default class previewImageMixin extends wepy.mixin {
    methods = {
        previewImage(current,urls){
            wx.previewImage({
                current,
                urls
            })
        }
    }
}
