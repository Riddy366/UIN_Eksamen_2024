import  {createClient} from "@sanity/client"

export const client = createClient({
    projectId: "56va9hvm",
    dataset: "production",
    useCdn: true
})