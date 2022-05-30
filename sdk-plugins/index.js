import Contentstack from "contentstack"

const Stack = process.env.API_KEY && process.env.DELIVERY_TOKEN && process.env.ENVIRONMENT ? Contentstack.Stack({ 
  api_key: process.env.API_KEY, 
  delivery_token: process.env.DELIVERY_TOKEN, 
  environment: process.env.ENVIRONMENT, 
  region: Contentstack.Region.EU 
}): "";

export default {
  getEntryWithRef(ctUid, ref, locale) {
    return new Promise((resolve, reject) => {
      Stack.ContentType(ctUid)
        .Query()
        .language(locale)
        .includeReference(ref)
        .includeOwner()
        .toJSON()
        .find()
        .then(
          (result) => {
            resolve(result);
          },
          (error) => {
            reject(error);
          },
        );
    });
  },
  getEntry(ctUid, locale) {    
    return new Promise((resolve, reject) => {
      Stack.ContentType(ctUid)
        .Query()
        .language(locale)
        .toJSON()
        .find()
        .then(
          (result) => {
            resolve(result);
          },
          (error) => {
            reject(error);
          },
        );
    });
  },
  getSpecificEntry(ctUid, entryUrl, locale) {
    return new Promise((resolve, reject) => {
      const blogQuery = Stack.ContentType(ctUid)
        .Query()
        .language(locale)
        .toJSON();
      const data = blogQuery.where("url", `${entryUrl}`).find();
      data.then(
        (result) => {
          resolve(result[0]);
        },
        (error) => {
          reject(error);
        },
      );
    });
  },
  getSpecificEntryWihtRef(ctUid, entryUrl, ref, locale) {
    return new Promise((resolve, reject) => {
      const blogQuery = Stack.ContentType(ctUid)
        .Query()
        .language(locale)
        .includeReference(ref)
        .toJSON();
        console.log(entryUrl)
      const data = blogQuery.where("url", `${entryUrl}`).find();
      data.then(
        (result) => {
          console.log(result)
          resolve(result[0]);
        },
        (error) => {
          reject(error);
        },
      );
    });
  },
};
