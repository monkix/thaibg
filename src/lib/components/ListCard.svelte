<script lang="ts">
   import {getImageURL, getDefaultImageURL} from '$lib/supabase'
   export let id: number
   export let slug: string
   export let picture: string
   export let name: string
   export let type: string

   
</script>

<a href="/{type}/{id}/{slug}">
   <div class="card card-side bg-base-100 shadow-xl transition ease-in-out hover:opacity-80 hover:-translate-y-0 hover:scale-105 duration-300 items-center">
      <figure><img src="{getImageURL(type, picture)}" class="h-20" alt="picture for {name}"
         on:error|once={(ev)=>ev.target.src = getDefaultImageURL(type)}
      ></figure>
      <div class="card-body">
        <p class="truncate">{name}</p>
    </div>
   </div>
</a>