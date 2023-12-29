export const cdnImageLoader = ({ src, width, quality }) => {
    // `width` is a hack for next/image to work,
    //  it will not affect local image
    if (src[0] === "/") {
        return `${src}?width=${width}`;
    }

    // `next_width` is a hack for next/image to work,
    //  it will not affect lambda function unlike `width` parameter
    return `${src}&next_width=${width}`;
};