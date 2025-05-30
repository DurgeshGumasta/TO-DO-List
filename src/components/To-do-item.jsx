export default function TodoItem({items}){
    return(
        <div style={{border:'1px solid #ccc', marginTop:'10px', padding:'8px'}}>
              ✅ {items}
        </div>
    )
}