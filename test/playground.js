import tweet from '../src/controller/tweet';
import image from '../src/controller/image';
import { Corpus, Document, Similarity } from 'tiny-tfidf';
import db from '../src/helper/database';
async function trains() {
   try {
      let names = db.photos.get_photos();
      names = names.map(photo => {
         return photo.id;
      });

      let tags = db.photos.root.get('tags').value();
      tags = tags.map(tag => {
         return tag.join(' ');
      });

      const corpus = new Corpus(names, tags);
      let query = corpus.getResultsForQuery('moody');

      if (query.length == 0) {
         throw new Error('there is no mathcing keywords');
      }

      let result = query.shift()[0];
      let photo = db.photos.get_photo(result);
      result = photo.tags.join(' ');
      db.photos.set_keywords(result);
   } catch (error) {
      console.log(error);
   }
}

async function test() {
   try {
      await image.tumblr(
         'Bangsatttttt Bangsatttttt Bangsatttttt Bangsatttttt Bangsatttttt Bangsatttttt Bangsatttttt Bangsatttttt Bangsatttttt Bangsatttttt Bangsatttttt Bangsatttttt Bangsatttttt'
      );
      console.log('done');
   } catch (error) {
      console.log(error);
   }
}

test();
// trains();
