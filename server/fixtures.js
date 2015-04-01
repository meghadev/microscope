if(Posts.find().count() == 0) {
  Posts.insert({
    title: 'Title 1',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Posts.insert({
    title: 'Title 2',
    url: 'http://meteor.com/'
  });
  
  Posts.insert({
    title: 'Title 3',
    url: 'http://themeteorbook.com'
  });    
}
