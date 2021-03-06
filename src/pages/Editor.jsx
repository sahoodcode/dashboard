
import React from 'react'
import { Header } from '../components'
import { EditorData } from '../data/dummy'

import {HtmlEditor,Image,Link,QuickToolbar,
RichTextEditorComponent,Toolbar} from
'@syncfusion/ej2-react-richtexteditor'
RichTextEditorComponent.Inject(Toolbar, Link, HtmlEditor, Image, QuickToolbar); 

const Editor = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 
    md:p-10 bg-white rounded-3xl' >
      <Header catogory="App" title="Editor" />
      <RichTextEditorComponent>
        <EditorData />
      </RichTextEditorComponent>
      </div>
  )
}

export default Editor