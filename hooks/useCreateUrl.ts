
export default function useCreateUrl(value: any[] | string[], key: string[]) {
   let url = ['?']
   let totalUrl = ''
   for (let i in value) {
      if (typeof (value[i]) == 'string' && value[i] != '') {
         url.push(`technical_characteristics.${key[i]}_like=${value[i]}`)
      }
      if (typeof (value[i]) == 'object' && value[i].from != '' && value[i].to != '' && key[i] != 'price') {
         url.push(`technical_characteristics.${key[i]}_gte=${value[i].from}&technical_characteristics.${key[i]}_lte=${value[i].to}`)
      }
      if (typeof (value[i]) == 'object' && value[i].from != '' && value[i].to != '' && key[i] == 'price') {
         url.push(`${key[i]}_gte=${value[i].from}&${key[i]}_lte=${value[i].to}`)
      }
   }

   url.forEach((item, index) => {
      if (index > 0) {
         totalUrl += `${item}&`
      } else {
         totalUrl += item
      }
   })
   return totalUrl.substring(0, totalUrl.length - 1)
}