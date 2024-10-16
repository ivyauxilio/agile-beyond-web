import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

import "./../assets/css/post.css";
// const Post = ({ post: { title, body, imgUrl, author }, index }) => {
//   return (
//     <div className="post-container">
//       <h1 className="heading">{title}</h1>
//       <img className="image" src={imgUrl} alt="post" />
//       <p>{body}</p>
//       <div className="info">
//         <h4>Written by: {author}</h4>
//       </div>
//     </div>
//   );
// };


const Post = ({ placeholder }) => {
	const editor = useRef(null);
	const [content, setContent] = useState('');

	const config = useMemo(
		{
			readonly: false, // all options from https://xdsoft.net/jodit/docs/,
			placeholder: placeholder || 'Start typings...'
		},
		[placeholder]
	);

	return (
		<JoditEditor
			ref={editor}
			value={content}
			config={config}
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {}}
		/>
	);
};

export default Post;
