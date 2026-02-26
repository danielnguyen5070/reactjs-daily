import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import Modal from './Modal'
import Select from './Select'
import Alert from './Alert'
import { Dropdown } from './Dropdown'
import DropdownTrigger from "./DropdownTrigger"
import DropdownMenu from "./DropdownMenu"
import DropdownItem from "./DropdownItem"
import Divider from './Divider'

const Components = () => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const [value, setValue] = useState("")
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)

    async function handleSave() {
        setLoading(true)

        // simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))

        setLoading(false)
    }

    return (
        <div className='mx-12 my-4'>
            <div className=''>
                <Input
                    ref={inputRef}
                    label="Email"
                    fullWidth={false}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="you@example.com"
                />
                <Button
                    fullWidth={false}
                    loading={loading}
                    onClick={
                        () => {
                            inputRef.current?.focus()
                            handleSave()
                        }}
                    className='mt-2'
                >Focus</Button>
            </div>
            <div>
                <Button onClick={() => setOpen(true)}>
                    Open modal
                </Button>

                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    title="Confirm action"
                >
                    <p className="mb-4">Are you sure?</p>
                    <Button onClick={() => setOpen(false)}>Close</Button>
                </Modal>
            </div>

            <Divider />

            <Select>
                <option value="">Select role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
            </Select>

            <Divider />

            <Alert variant="error">
                Something went wrong. Please try again.
            </Alert>

            <Divider />

            <div className='flex justify-end'>
                <Dropdown>
                    <DropdownTrigger className="px-4 py-2 border rounded-md">
                        Open menu
                    </DropdownTrigger>

                    <DropdownMenu>
                        {/* <DropdownItem onClick={() => console.log("Profile")}>
                            Profile Profile Profile Profile
                            Profile Profile Profile Profile
                            Profile Profile Profile Profile
                            Profile Profile Profile Profile
                            Profile Profile Profile Profile
                            Profile Profile Profile Profile
                            Profile Profile Profile Profile
                            Profile Profile Profile Profile
                        </DropdownItem>
                        <DropdownItem onClick={() => console.log("Settings")}>
                            Settings
                        </DropdownItem>
                        <DropdownItem onClick={() => console.log("Logout")}>
                            Logout
                        </DropdownItem> */}
                        <div>
                            <p>ss</p>
                            <p>ss</p>
                            <p>ss</p>
                            <p>ss</p>
                            <p>ss</p>
                            <p>ss</p>
                            <p>ss</p>
                            <p>ss</p>
                            <p>ss</p>
                            <p>ss</p>
                            <p>ss</p>
                            <p>ss</p>
                            <p>ss</p>
                            <p>ss</p>
                            <p>ss</p>
                            <p>ss</p>
                        </div>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
    )
}

export default Components