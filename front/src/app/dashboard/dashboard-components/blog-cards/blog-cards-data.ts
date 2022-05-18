export interface blogcard {
    title: string,
    subtitle: string,
    subtext: string,
    image: string
}

export const blogcards: blogcard[] = [

    {
        title: 'NPS',
        subtitle: 'Net Promoter Score',
        subtext: 'This KPI will help you to get a clearer vision about the Satisfaction of your Customers as Global, it\'s calculated by the formula:\n %Satisfaction-%Unsatisfaction \n and it\'s per product or per client',
        image: 'assets/images/bg/bg1.jpg'
    },
    {
        title: 'FCR',
        subtitle: 'First Contact Resolution',
        subtext: 'This KPI was calculated to put make jump in the shoes of you average client, and it is calculated by the formula\n (number of requests resolved at first contact / total number of requests)*100',
        image: 'assets/images/bg/bg2.jpg'
    },
    {
        title: 'Reimboursment Rate',
        subtitle: '',
        subtext: 'This KPI represents the pourcentage of the average amount expected for all of you client, it\'s formula is:\nThe amount reimbursed / the expected amount *100',
        image: 'assets/images/bg/bg3.jpg'
    }


] 