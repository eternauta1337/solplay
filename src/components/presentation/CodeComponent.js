import React from 'react';

const renderReadOnly =(content) => {
  return (
    <div style={{height: '100%'}}>
      <div className="form-group" style={{height: '100%'}}>
        <textarea 
          className="form-control rounded-0" 
          readOnly
          style={{fontFamily: 'monospace', fontSize: 13}}
          value={content}/>
      </div>
    </div>
  );
};

const renderEditable = (updateSource, content) => {
  return (
    <div style={{height: '100%'}}>
      <div className="form-group" style={{height: '100%'}}>
        <textarea 
          className="form-control rounded-0" 
          style={{fontFamily: 'monospace', fontSize: 13}}
          onChange={evt => updateSource(evt)}
          value={content}/>
      </div>
    </div>
  );
};

const CodeComponent = ({updateSource, content}) => {
  if(updateSource) return renderEditable(updateSource, content);
  else return renderReadOnly(content);
};

export default CodeComponent;
