export const userQuery = (email, password) => {
  const query = `*[_type == 'user' && email == '${email}' && password == '${password}']`;
  return query;
};

export const mainCollectionsQuery = `*[_type == 'collection' && !isFoodCategory]{
    title,
    subTitle,
    brands[] -> {
        
        _id,
            name,
        description,
        rating,
        deliveryFee,
        deliveryTime,
        imageUrl,
         products[] -> {
            _id,
            name,
            description,
            rating,
            price,
            imageUrl
        }
        
        
    }
}`;
export const foodCategoriesCollectionsQuery = `*[_type == 'collection' && isFoodCategory]{
    title,
    subTitle,
    imageUrl,
    brands[] -> {
        _id,
            name,
        description,
        rating,
        deliveryFee,
        deliveryTime,
        imageUrl,
        products[] -> {
            _id,
            name,
            description,
            rating,
            price,
            imageUrl
        }
        
        
    }
}`;

export const bannersQuery = `*[_type == 'banner']`;
