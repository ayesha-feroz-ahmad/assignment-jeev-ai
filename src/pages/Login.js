import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate=useNavigate()
  const { register, formState: { errors }, handleSubmit } = useForm()

  const onSubmitLoginForm = (data) => {
    sessionStorage.setItem("userDetail",data?.email)
    navigate('/dashboard')

  }


  return (
   
      <div className="container">
        {/* Outer Row */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
               
                <div className="row">
                  <div className="col-3" />
                  <div className="col-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user" onSubmit={handleSubmit(onSubmitLoginForm)}>
                        <div className="form-group">
                          <input type="email" className="form-control form-control-user" placeholder="Enter Email Address..." autoFocus {...register("email", {
                            required: {
                              value: true,
                              message: "Email is required"
                            },
                            pattern: {
                              value:
                                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                              message: "Please enter valid email address",
                            },
                          })
                          } />
                        </div>
                        {
                          errors?.email?.message &&
                          <div className="error-msg"><p>{errors?.email?.message}
                          </p></div>
                        }
                        <div className="form-group">
                          <input type="password" className="form-control form-control-user" placeholder="Password"
                            {...register("password", {
                              required: {
                                value: true,
                                message: "Password is required!"
                              },
                              minLength: {
                                value: 8,
                                message: 'Password must be at least 8 characters long.'
                              }
                            })}
                          />
                        </div>
                        {errors?.password?.message
                          && <div className="error-msg"><p>{errors?.password?.message}</p></div>
                        }
                        <button type="submit" className="btn btn-primary btn-user btn-block">
                          Login
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
            
              </div>
            </div>
          </div>
        </div>
      </div>


  )
}

export default Login
