# GrooveRhyme

## Main_js.js

- This is the main screen part. Users can see this page when they first click on the link.
- The users can select three mode here, **Searching mode, Writing mode, Profile mode**.



## /Search

### DPsearch1_js.js

- In the searching mode, you can choose two condition of searching to find appropriate movie, **category** and **aspect**.
- DPsearch1 can choose the category of the movie to find the movie.
- When the users click the **go to choose Category**, they can choose the category that you want to watch. Or, if you click the **Skip?** button, you can simply ignore the category selection part.



### /choosecategory/category.js

- The user can see the categories that they can select.
- If the user hover the name of the categories, the symbol of the categories are appeared.
- The prototype page will be moved when the user click one of the categories.



### DPsearch2_js.js

- After the users select categories, they can see the **category is appeared in the selection box**.
- The user can **choose the aspect** to search the movie, or **they can just find the movie** with only a category information.



### searchaspect/searchaspect_js.js

- The users can **select the aspects** of the movie to see the result arranged in the high rate order.
- The user can check the **aspect of the movie** by **clicking the circle** in the vertex of the pentagon.



### DPsearch3_js.js 

- After the users select both condition of category and aspect, they can see result of **recommendation of the movie**.



### selectMovie_js.js

- The user can check the **result of the searching** after the selection of the searching condition is finished.
- The prototype shows the result of the searching in **two options** to **make the choice of the users more easier**.
- The user can see **specific information**(ex, rating of the each aspect) by **clicking the poster of the movie**.
- If the users don't like the exhibition of the result, they can click the **refresh** button to **see another option** of the movie can choose.
- The user can **put in the movie into the collection** by click the **+ button** under the poster of the movie.



### movieReview_js.js

- The user can recognize the reviews of other user and the rating of the each aspects in the movieReview section.
- They can write the review of the movie by clicking the **POST** button.



## /Writing

### writing_js.js

- In the writing mode, the users can search the title of the movie to write the review.

- When they write the title in the input box, **movie title of autocomplete** will be appear. When they choose the title in the autucomplete, the **poster of the movie** will be appear under the input box.

- After select the title of the movie, you can move on the page to write the reviews.

  

### /aspect/aspects_js.js

- The users can write the review of the movie with five aspects, which is **Production, Acting, Synopsis, Visual, Music**. 
- Users can write the review after **click the circle in the pentagon**, which is the individual aspect of the movie.
- When the users finished writing reviews, they can upload their review by click **OK** button.
- After give a rate of the movie and write reviews, the user can see that the review is reflected in the prototype by **changing the color of the circle** in the pentagon.



### /aspect/write_review/write_review_js.js

- In the review page, the users can rate the star-rate of the movie and write the review of the aspects of movie that they choose.


## /Profile

### profilePage_js.js

- The users can see their profile by click **their profile photo** in the **main page**.
- The users can see their **reviews**, **collections** which are written by the users.
- **The review** of the users is shown as the **poster of the movie**, and **the collections** of the users is shown as the **list**.
- When the users click the poster of the movie, they can **edit the review** they wrote, or they **remove their review**.



### collection_js.js

- When the users click the collection, they can see the **movies contained in the collection**. 
- They can see the specific information of the movie by **clicking the title of the movie** in the collection.
- If they want to remove the collection, they can remove it by clicking the **delete collection**.
