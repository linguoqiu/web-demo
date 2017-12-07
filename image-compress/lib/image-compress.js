
/**
 * image-compress.js
 * @author Gavin.Lam
 * 图片压缩
 * file: input标签
 * imgView： 压缩后展示的img标签 
 * quality： 压缩的质量【0-1】
 */
var PACKAGE_NAME = "imageCompress";(function (name, definition) {
    var hasDefine = typeof define === 'function';
    var hasExports = typeof module !== 'undefined' && module.exports;
    if (hasDefine) {
        define(definition);
    } else if (hasExports) {
        module.exports = definition();
    } else {
        this[name] = definition();
    }
})(PACKAGE_NAME, function () {
    /*
    * file: input标签
    * imgView： 压缩后展示的img标签 
    * quality： 压缩的质量【0-1】
    */
    return function (file, imgView, quality) {
        var eleFile = file;
        var imgView = imgView;
        var reader = new FileReader(),
            img = new Image();
        var file = null;
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        img.onload = function () {
            var originWidth = this.width;
            var originHeight = this.height;
            var maxWidth = 600,
                maxHeight = 600;
            var targetWidth = originWidth,
                targetHeight = originHeight;
            if (originWidth > maxWidth || originHeight > maxHeight) {
                if (originWidth / originHeight > maxWidth / maxHeight) {
                    targetWidth = maxWidth;
                    targetHeight = Math.round(maxWidth * (originHeight / originWidth));
                } else {
                    targetHeight = maxHeight;
                    targetWidth = Math.round(maxHeight * (originWidth / originHeight));
                }
            }
            canvas.width = targetWidth;
            canvas.height = targetHeight;
            context.clearRect(0, 0, targetWidth, targetHeight);
            context.drawImage(img, 0, 0, targetWidth, targetHeight);
            var newUrl = canvas.toDataURL('image/jpeg', quality);
            console.log('压缩后长度：', newUrl.length)　　　　　　　　　　
            imgView.src = newUrl;
        };
        reader.onload = function (e) {
            img.src = e.target.result;
            console.log('压缩前长度：', e.target.result.length)
        };
        eleFile.addEventListener('change', function (event) {
            file = event.target.files[0];
            if (file.type.indexOf("image") == 0) {
                reader.readAsDataURL(file);
            }
        });
    }
})