if(Posts.find().count() == 0) {
  Posts.insert({
    title: 'Source 1',
    url: 'http://wikipedia.org/'
  });

  Posts.insert({
    title: 'Source 2',
    url: 'http://meteor.com/'
  });
  
  Posts.insert({
    title: 'Source 3',
    url: 'http://w3schools.com'
  });    
}
