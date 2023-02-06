// export const userQuery = (username, password) => {
//   const query = `*[_type == 'user' && username == '${username}' && password == '${password}']`;
//   return query;
// };

export const mainCollectionsQuery = `*[_type == 'collection' && !isFoodCategory]{
    title,
    subTitle,
    brands[] -> {
        
            name,
        description,
        rating,
        deliveryFee,
        deliveryTime,
        imageUrl
        
        
    }
}`;
export const foodCategoriesCollectionsQuery = `*[_type == 'collection' && isFoodCategory]{
    title,
    subTitle,
    imageUrl,
    brands[] -> {
        
            name,
        description,
        rating,
        deliveryFee,
        deliveryTime,
        imageUrl
        
        
    }
}`;

export const bannersQuery = `*[_type == 'banner']`;
