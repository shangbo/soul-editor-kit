import EditorDomRenderer from 'soul-editor-kit/renderers/editor-dom';
import RenderTree from 'soul-editor-kit/models/render-tree';

export default function renderBuiltAbstract(post, editor) {
  editor.post = post;
  let unknownCardHandler = () => {};
  let unknownAtomHandler = () => {};
  let renderer = new EditorDomRenderer(
    editor, [], [], unknownCardHandler, unknownAtomHandler);
  let renderTree = new RenderTree(post);
  renderer.render(renderTree);
  return editor;
}
