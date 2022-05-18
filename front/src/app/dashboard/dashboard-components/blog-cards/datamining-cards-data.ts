export interface datamining {
    title: string,
    subtitle: string,
    subtext: string,
    image: string
}

export const dataminingcards: datamining[] = [


    {
        title: 'Recommendation System',
        subtitle: 'Collaborative Filtering Method',
        subtext: 'The collaborative filtering method predicts (filters) the interests of a user on a product by collecting preferences information from many other users (collaborating). Scale [0,5]',
        image: 'assets/images/bg/bg3.jpg'
    }
    ,
    {
        title: 'Scoring',
        subtitle: 'Scoring Based on Formula Model',
        subtext: '**WeightedRating(WR)=( (v/v+m) ⋅R) + ( (m/v+m) ⋅C)** #v is the number of complaints where the broker exists; #m is the minimum votes required to be listed in the chart; #R is the average rating of the broker; #C is the mean vote across the whole report.',
        image: 'assets/images/bg/bg3.jpg'
    }

] 