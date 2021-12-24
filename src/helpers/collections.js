export const networkCollections = {
  "0x89": [
    //Add Your Collections here
    {
      image:
        "https://lh3.googleusercontent.com/b2l4dfpgN7UNtZgUK0CmaD-p5AS2dtD8Gl68Bungd16HcdNVXNz-kVChOoGj1OLNDBFHAY05lufCvra8zUzxMjItKBn9twgAWiRjyYM=w300",
      name: "Cryptoval",
      addrs: "0xbbd7a9cc1e5ad08e49e332c1884368e2d2e2fc7b",
    },
    {
      image:
        "https://lh3.googleusercontent.com/kFSI00M21VnSdbyCQlQObPc1VCHlZPeG95L-jZE4J71vudit6Y4hrgfffvfIEHJWlEgPc00bmWHzGGwUjK-muavmTxAdyQcgkOJaYMM=w300",
      name: "Pinguin Chelou",
      addrs: "0x00fd8238683eb0f3e6ba8af94f8079bfd49a3aaf",
    },
  ],

};

export const getCollectionsByChain = (chain) => networkCollections[chain];
