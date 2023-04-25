import React from 'react';
import  ReactDOM  from 'react-dom'
import './AboutPage.css';

function AboutPage() {
  document.title = 'iasonotk | about me'
  return (
    <div className="about-page-container">
      <h3>About Me</h3>
<p>I am Iason, the author of this blog. All the content posted here belongs to me. The messages and opinions expressed on this blog are my personal opinions and do not belong to any organization or group with which I may be affiliated.</p>
<p>In my free time, I enjoy reading books, listening to podcasts, and watching movies. I love programming, especially automating computational processes.</p>
<p>I like innovative technologies. I think that AI is the future.</p>
    </div>
  );
}

ReactDOM.render(<AboutPage />, document.getElementById('root'));

export default AboutPage;
