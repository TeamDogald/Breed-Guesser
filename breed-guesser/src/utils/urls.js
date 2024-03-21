// const urls = {
//     allBreeds: `https://dog.ceo/api/breeds/list/all`,
//     randomImg: ``,
//     random3Img: `https://dog.ceo/api/breeds/image/random/3`,
// }

class DogUrls {
    constructor() {
        allBreeds = `https://dog.ceo/api/breeds/list/all`;
        randImg = `https://dog.ceo/api/breeds/image/random`;
        defaultRandImgs = 'https://dog.ceo/api/breeds/image/random/3';
        defaultBreedUrl = 'https://dog.ceo/api/breed/hound/images'
    }
    setRandImgs(int) {
        if (int > 50) return 'Cannot be more than 50 pictures at a time';
        return `https://dog.ceo/api/breeds/image/random${int}`;

    }
    setSpecificBreedUrl(breed) {
        return `https://dog.ceo/api/breed/${breed}/images`;
    }
}

const FetchUrls = new DogUrls;

export default FetchUrls;