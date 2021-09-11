import { FC, useEffect, useRef, useState } from 'react';
import { SpinnersLoading } from './loading/SpinnersLoading';

interface Props {
  textCKEditor: string;
  setTextCKEDitor: (el: string) => void;
}

export const Editor: FC<Props> = ({ textCKEditor, setTextCKEDitor }) => {
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  // @ts-ignore
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    // @ts-ignore
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic')
    };

    setEditorLoaded(true);
  }, []);

  return editorLoaded ? (
    <CKEditor
      editor={ClassicEditor}
      data={textCKEditor}
      // @ts-ignore
      onChange={(event, editor) => {
        const data = editor.getData();
        setTextCKEDitor(data);
      }}
      config={{
        ckfinder: {
          uploadUrl: '/api/recipe/upload',
          options: {
            resourceType: 'Images'
          }
        }
      }}
    />
  ) : (
    <div className="text_center">
      <SpinnersLoading />
    </div>
  );
};
