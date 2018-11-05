import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { TranslateModule } from '@ngx-translate/core'

import { HeaderHomeComponent } from './header-home.component'
import { LayoutModule } from '../../layout.module'

describe('HeaderHomeComponent', () => {
  let component: HeaderHomeComponent
  let fixture: ComponentFixture<HeaderHomeComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        LayoutModule,
        RouterTestingModule,
        TranslateModule.forRoot(),
      ],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderHomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
