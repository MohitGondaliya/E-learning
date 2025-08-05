import React from 'react';
import Editor, {
    BtnBold,
    BtnItalic,
    BtnLink,
    HtmlButton,
    Toolbar
} from 'react-simple-wysiwyg';

const TextEditor: React.FC = () => {
    const [value, setValue] = React.useState('Hello World!');

    return (
        <div className="text-editor">
            <Editor value={value} onChange={(e) => setValue(e.target.value)}>
                <Toolbar>
                    <BtnBold />
                    <BtnItalic />
                    <BtnLink />
                    <HtmlButton />
                </Toolbar>
            </Editor>
        </div>
    )
};

export default TextEditor;