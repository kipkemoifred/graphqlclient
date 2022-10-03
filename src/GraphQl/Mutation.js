import { gql } from '@apollo/client';
export const CREATE_USER_MUTATION=gql`

mutation createUser($name:String!,$age:Int!){
    createUser(name:$name,age:$age){
    name
    }
}

# mutation {
#   createUser(name:"sdfd",age:43){
#     name
#     age
#   }
# } 
`