## P3 Peer Review

+ Reviewer's name: Chutian Gao (charlie-harvard)
+ Reviwee's name: Gerald Derrick
+ URL to reviewee's Github repo: *<https://github.com/gaderrick/e28/>*

### Are you able to produce any errors or unexpected results?
If the name of a beer recipe is empty, then a blank item shows up on the list view. This could be avoid by checking the name field value before saving.

### Were there any parts of the interface that you found confusing or unclear?
No. The interface is clear and intuitive.

### Are there aspects of the code that you feel were not self-evident and would benefit from comments?
In the Recipe class (Recipe.js). An ```id``` value is assigend to each local recipe, however, it is never used. Recipe are stored as an array and their array indexes are used as ```recipeId```.

### Are there any parts of the code that you found interesting or taught you something new?
On the **Add a Recipe** page, there's a generic ```addListItem``` function. It is used through out the page, and it dynamically adds extra HTML input fields for different questions. I found that it is very useful. Especially, Gerald utilized ```v-for``` and ```v-bind``` so that Vue takes over all of the DOM operations.

### Are there any best practices discussed in course material that you feel were not addressed in the code?
The web console is still printing out debuging messages on Prod server at the moment I reviewed.

### Do you have any additional comments not covered in the above questions?
NA