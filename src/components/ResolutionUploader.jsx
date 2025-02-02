import React from 'react'

export function ResolutionUploader({ resolution, onImageUpload }) {
  const [preview, setPreview] = React.useState(null)

  const handleFileChange = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      onImageUpload(resolution, file)
      setPreview(URL.createObjectURL(file))
    }
  }

  const handleDelete = () => {
    onImageUpload(resolution, null)
    setPreview(null)
  }

  return (
    <div style={{ marginBottom: '20px' }}>
      <label htmlFor={`image-${resolution}`} style={{ display: 'block', marginBottom: '5px' }}>
        Imagen {resolution}
      </label>
      <input
        id={`image-${resolution}`}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ marginBottom: '10px' }}
      />
      {preview && (
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <img 
            src={preview || "/placeholder.svg"} 
            alt={`Vista previa ${resolution}`} 
            style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '4px' }} 
          />
          <button
            onClick={handleDelete}
            style={{
              position: 'absolute',
              top: '5px',
              right: '5px',
              background: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px'
            }}
            aria-label="Eliminar imagen"
          >
            ×
          </button>
        </div>
      )}
    </div>
  )
}

