module.exports = function(migration){

    //When you need to auto generate a script of you content model then you should run below command
    // contentful space generate migration --space-id {space-id}

    //here I am creating a new content type and to that content type have added fields to it    
    const productSection = migration
        .createContentType("productSection")
        .name("Product Section")
        .description("Single product content type")
        .displayField("title");


    const internalName = productSection
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol");

    const title = productSection
        .createField("title")
        .name("Title")
        .type("Symbol")
        .required(true);
    
    const products = productSection
    .createField("products")
    .name("Products")
    .type("Array")
    .items({
        type:"Link",
        linkType:"Entry",
        validations:[{linkContentType:["product"]}]
    });
}