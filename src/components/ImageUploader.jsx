import React from 'react'
import { ResolutionUploader } from './ResolutionUploader'

const RESOLUTIONS = ['1024x1024', '512x512', '256x256']

export function ImageUploader() {
  const [images, setImages] = React.useState({})
  const [message, setMessage] = React.useState(null)

  const handleImageUpload = (resolution, file) => {
    setImages(prev => ({ ...prev, [resolution]: file }))
  }

  const handleSubmit = async () => {
    const uploadedImages = Object.entries(images).filter(([_, file]) => file !== null)
    
    if (uploadedImages.length === 0) {
      setMessage({ type: 'error', text: 'Por favor, carga al menos una imagen.' })
      return
    }

    const formData = new FormData()
    uploadedImages.forEach(([resolution, file]) => {
      if (file) formData.append(resolution, file)
    })

    try {
      const response = await fetch('/api/upload-images', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setMessage({ type: 'success', text: 'Las imágenes se han cargado correctamente.' })
        setImages({})
      } else {
        throw new Error('Error al cargar las imágenes')
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Hubo un problema al cargar las imágenes. Por favor, inténtalo de nuevo.' })
    }
  }

  return (
    <div>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
        Carga de imágenes para la app de gimnasio
      </h2>
      {RESOLUTIONS.map(resolution => (
        <ResolutionUploader
          key={resolution}
          resolution={resolution}
          onImageUpload={handleImageUpload}
        />
      ))}
      <button 
        onClick={handleSubmit}
        style={{
          backgroundColor: '#4CAF50',
          border: 'none',
          color: 'white',
          padding: '15px 32px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          margin: '4px 2px',
          cursor: 'pointer',
          borderRadius: '4px'
        }}
      >
        Enviar imágenes
      </button>
      {message && (
        <div 
          style={{ 
            marginTop: '20px', 
            padding: '10px', 
            borderRadius: '4px',
            backgroundColor: message.type === 'error' ? '#ffcccb' : '#90EE90',
            color: message.type === 'error' ? '#D8000C' : '#4F8A10'
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  )
}

