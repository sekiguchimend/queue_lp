'use client';

import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';

interface TinyMCEEditorProps {
  value: string;
  onChange: (content: string) => void;
  height?: number;
}

export default function TinyMCEEditor({ value, onChange, height = 500 }: TinyMCEEditorProps) {
  const editorRef = useRef<any>(null);

  return (
    <Editor
      apiKey="nn4binis9k4dzuafzo2wvdl6jobzmh8e4g6hfjvs62zroxvd"
      onInit={(evt, editor) => (editorRef.current = editor)}
      value={value}
      onEditorChange={(content) => onChange(content)}
      init={{
        height: height,
        menubar: true,
        plugins: [
          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
          'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
        ],
        toolbar: 'undo redo | blocks | ' +
          'bold italic forecolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        language: 'ja',
      }}
    />
  );
}
