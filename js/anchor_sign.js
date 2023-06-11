// 获取所有匹配选择器的 ".recent-post-info" 元素
var postInfos = document.querySelectorAll('.recent-post-info');

// 遍历每个 ".recent-post-info" 元素
postInfos.forEach(function(postInfo) {
  // 获取当前元素的 ".article-meta__categories" 子对象的值
  var categories = postInfo.querySelector('.article-meta-wrap > .article-meta > .article-meta__categories').textContent.trim();

  // 根据不同的分类选择要添加的表情符号
  var emoji;
  switch (categories) {
    case 'basic knowledge':
      emoji = '📚';
      break;
    case 'skill learning':
      emoji = '🧐';
      break;
    case 'problem solving':
      emoji = '💡';
      break;
    default:
      emoji = '📚';
  }
  // 在标题前添加表情符号
  var title = postInfo.querySelector('.article-title');
  title.textContent = emoji + ' ' + title.textContent;
});



// 获取所有匹配选择器的元素
var categories = document.querySelectorAll('.card-category-list-name');

// 遍历每个类别元素并根据值添加不同的表情符号
categories.forEach(function(category) {
  var categoryName = category.textContent;

  // 根据不同的类别名称设置不同的表情符号
  var emoji;
  switch (categoryName) {
    case 'basic knowledge':
      emoji = '📚';
      break;
    case 'skill learning':
      emoji = '🧐';
      break;
    case 'problem solving':
      emoji = '💡';
      break;
    default:
      emoji = '📚';
  }

  // 在类别名称前添加表情符号
  category.textContent = emoji + ' ' + categoryName;
});

// 获取第一个"figure.highlight.bash"元素
var figure = document.querySelector("#article-container > figure");

if (figure) {
  // 获取figure元素之后的所有兄弟节点
  var siblings = figure.nextElementSibling;

  // 循环遍历兄弟节点并删除 <br> 标签
  while (siblings) {
    var nextSibling = siblings.nextElementSibling;
    if (siblings.tagName === "BR") {
      siblings.remove();
    }
    siblings = nextSibling;
  }
}
