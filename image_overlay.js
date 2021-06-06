<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">

<a id="container" href="http://www.facebook.com">
  <div class="profile-pic">
    <img src="https://c1.staticflickr.com/5/4023/5154094149_8c1345f634.jpg">
    <div class="edit">
      <a href="#">
          <svg viewBox="0 0 100 100" class="ItemTitle_iconEdit-3kpAL"><path d="M24.56 92.536L0 100l7.453-24.583c6.356-.244 17.322 10.792 17.107 17.119zM96.617 32.082l-.475.471L67.383 3.766l.472-.472c12.927-12.94 42.016 15.517 28.762 28.788zM61.64 9.516l28.758 28.785-46.303 46.345c-1.222 1.221-2.234.884-2.234.884l2.314-15.356-14.454.074.072-14.468-15.342 2.312s-.34-1.011.883-2.234L61.64 9.516z"></path></svg>
      </a>
    </div>
  </div>
</a>

.profile-pic {
  position: relative;
  border: 1px solid red;
  display: inline-block;
}

.edit {
  position: absolute;
  top: 0;
  right: 0;
  display: none;
}

.profile-pic:hover .edit {
  display: block;
}


