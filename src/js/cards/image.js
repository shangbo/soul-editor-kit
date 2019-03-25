import placeholderImageSrc from 'soul-editor-kit/utils/placeholder-image-src';

export default {
  name: 'image',
  type: 'dom',

  render({payload}) {
    let img = document.createElement('img');
    img.src = payload.src || placeholderImageSrc;
    return img;
  }
};
