"use client"
import 'viewerjs/dist/viewer.min.css'
import 'css/image-zoom-view.css'
import { useEffect } from "react"
import Viewer from 'viewerjs'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function replaceAndCapitalize(string) {
    const replacedString = string.replace(/-/g, ' ');
    return capitalizeFirstLetter(replacedString);
}

const ImageZoomView = () => {

    useEffect(() => {
        const scrollTopAndComment = document.getElementById("ScrollTopAndComment")
        const mainBlog = document.getElementById("main-blog")
        if(!mainBlog) {
            return;
        }
        const viewer = new Viewer(mainBlog, {
            navbar: false,
            title: [1, (image) => replaceAndCapitalize(image.alt)],
            toolbar: {
                zoomIn: 2,
                zoomOut: 2,
                oneToOne: 2,
                reset: 2,
                prev: 2,
                play: {
                    show: 2,
                    size: 'large'
                },
                next: 2,
                rotateLeft: 2,
                rotateRight: 2,
                flipHorizontal: 2,
                flipVertical: 2
            },
            show: function() {
                scrollTopAndComment && (scrollTopAndComment.style.display = "none")
            },
            hidden: function() {
                scrollTopAndComment && scrollTopAndComment.removeAttribute("style")
            },
            tooltip: false,
            minZoomRatio: 0.7,
            initialCoverage: 0.9,
            slideOnTouch: false,
            zoomRatio: 0.4
        })
    }, [ ])

    return <></>
}

export default ImageZoomView