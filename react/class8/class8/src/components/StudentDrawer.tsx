import { useState } from 'react'
import Button from './Button'
import Drawer from './Drawer'
import Input from './Input'

interface StudentDrawerProps {
  open: boolean
  onClose: () => void
}

const StudentDrawer: React.FC<StudentDrawerProps> = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    major: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('fromData', formData)
    onClose()
    setFormData({ name: '', age: '', major: '' })
  }

  return (
    <Drawer isOpen={open} onClose={onClose} title="Add New Student">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          label="Name"
          name="name"
          placeholder="Enter student name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          label="Email"
          name="email"
          placeholder="Enter student email"
          value={formData.age}
          onChange={handleChange}
        />
        <Input
          label="Roll Number"
          name="rollNumber"
          placeholder="Enter roll number"
          value={formData.major}
          onChange={handleChange}
        />
        <div className="flex justify-end gap-3 mt-4">
          <Button variant="outline" type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </Drawer>
  )
}

export default StudentDrawer