<!-- <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
 -->
<a id="container" href="http://www.facebook.com">
  <div class="profile-pic">
    <img src="https://c1.staticflickr.com/5/4023/5154094149_8c1345f634.jpg">
    <div class="edit">
      <a href="#">
        <i class="fa fa-pencil fa-lg">I</i>
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


